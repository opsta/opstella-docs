# Using Open telemetry

## Opentelemetry คืออะไร ?

**Opentelemetry** คือ เครื่องมือสำหรับช่วยทำงานในการติดตามการทำงาน โดยแสดงเส้นทางของ request จนจบการทำงาน โดยสามารถบันทึกข้อมูล และติดตามได้ โดยใน Opstella openTelemetry จะทำการ Tracing service ต่างๆ แล้วส่งข้อมูลเข้า **Mimir** แล้วข้อมูลจึงถูกไปแสดงบน Grafana อีกที **ดังรูป**

![opensearch](/images/usecase/using-opentelemetry/flow.png)

จากรูป Opentelemetry จะดึง Tracing จาก pod และส่งไปยัง Mimir โดยใน pod จะต้องมีการเขียน Tracing แล้วส่งไปยัง Opentelemetry โดยจะมี library ในแต่ละภาษาช่วยทำงานนี้ **ยกตัวอย่าง**

python ที่ใช้ fast-api framework ที่ deploy ด้วย ArgoCD ใช้ Helm onechart

จะมี library ที่ต้องติดตั้ง **ดังนี้**

```
opentelemetry-distro==0.46b0
opentelemetry-exporter-otlp==1.25.0
opentelemetry-instrumentation-fastapi==0.46b0
fastapi==0.111.0
uvicorn==0.15.0
python-dotenv==0.19.0
opentelemetry-instrumentation-logging==0.46b0
```

นอกจากนี้ต้องเขียน environmemt variable ดังต่อไปนี้ (ใน python จะดึงตามชื่อ แต่ละในภาษาอื่น หรือ framework อื่นต้องดูตาม Document)

```
OTEL_EXPORTER_OTLP_ENDPOINT=**endpoint ของ opentelemetry **
OTEL_EXPORTER_OTLP_PROTOCOL=grpc
OTEL_LOGS_EXPORTER=otlp
OTEL_METRICS_EXPORTER=none
OTEL_PYTHON_LOG_CORRELATION=true
OTEL_RESOURCE_ATTRIBUTES=**ชื่อของ service ที่จะทำการ tracing**
```

ในส่วนการส่ง Tracing ไปยัง Opentelemetry

```
import asyncio
import random
import time
import os
from fastapi import FastAPI
from opentelemetry import trace

# using sdk
from opentelemetry._logs import set_logger_provider
from opentelemetry.exporter.otlp.proto.grpc._log_exporter import (
    OTLPLogExporter,
)
from opentelemetry.sdk._logs import LoggerProvider, LoggingHandler
from opentelemetry.sdk._logs.export import BatchLogRecordProcessor

# how to use instrumentation
from opentelemetry.instrumentation.logging import LoggingInstrumentor

import logging
import sys


tracer = trace.get_tracer(__name__)

app = FastAPI()
logger_provider = LoggerProvider()

set_logger_provider(logger_provider)

exporter = OTLPLogExporter(insecure=True)
logger_provider.add_log_record_processor(BatchLogRecordProcessor(exporter))
handler = LoggingHandler(level=logging.NOTSET, logger_provider=logger_provider)

# Attach OTLP handler to root logger
logging.getLogger().addHandler(handler)

# write log
tracer.start_as_current_span("Write logs")
```

## Query Opentelemetry

การ query opentelemetry

1. เปิดไปยังหน้า Component เลือก devops tool **Grafana**

![opensearch](/images/usecase/using-opentelemetry/1.png)

2. กดเข้าด้วย OIDC
   ![opensearch](/images/usecase/using-opentelemetry/2.png)

3. ที่เมนูด้านซ้ายกด **Explore** (1) จากกดที่เมนู **Search** (2) จะปรากฏรายการ filter ขึ้นมา ให้ลองดู **Duration** (3) ใช้สำหรับกรองว่าจะดูช่วงเวลาไหน
   จากนั้นให้ดูที่ ตาราง Trace ด้านล่างเลือก รายการ Tracing ที่ต้องการ

![opensearch](/images/usecase/using-opentelemetry/3.png)

4. จะปรากฏรายการ Tracing สามารถดูว่าทำงานแต่ช่วงใช้เวลาเท่าไหร่ และกดเข้าไปดูรายละเอียดได้ **ดังรูป**

![opensearch](/images/usecase/using-opentelemetry/4.png)

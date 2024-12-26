---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Opstella"
  text: "Simplify DevSecOps Platform Engineering"
  tagline: Unified single portal for development, security, and operations to create a secure and efficient application onboarding experience for enterprises that focus on fast, reliable, and scalable software delivery.
  actions:
    - theme: brand
      text: Getting started ->
      link: /intro/what-is-opstella

features:
  - title: Introduction
    icon:
      src: /images/heroes/getting-started.png
      width: 48
      height: 48
    details: Details of all opstella systems
    link: /intro/what-is-opstella
  # - title: Cluster
  #   icon:
  #     src: /images/heroes/kubernetes.svg
  #     width: 32
  #     height: 32
  #   details: Details of the Kubernetes cluster related to the opstella system
  #   link: /intro/cluster
  - title: Role and Permissions
    icon:
      src: /images/heroes/user.svg
      width: 32
      height: 32
    details: Details of role and access rights of users in each layer of opstella and how to use the user menu
    link: /role-and-permissions
  - title: Deploy Application
    icon:
      src: /images/heroes/getting-started.png
      width: 48
      height: 48
    details: Details of the steps to start and complete the Deploy Application
    link: /deploy-application/deploy-on-opstella
  - title: Usecases
    icon:
      src: /images/heroes/usecase.svg
      width: 32
      height: 32
    details: Important use cases
    link: /usecase/argocd-ui
---

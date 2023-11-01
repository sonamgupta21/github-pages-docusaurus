---
sidebar_position: 4
---

# Integrations

## Kubernetes 

Manage all Kubernetes logs and events using our easy to deploy [public helm chart](https://github.com/sigscalr/helm-chart).

This helm chart includes a fluentd daemonset to automatically ingest Kubernetes logs into the SigScalr instance.

## FluentD

SigScalr implements the nessecary ES APIs for the FluentD Elasticsearch plugin. In order to use FluentD, make sure that the `path` configuration is set to `/elastic`

Example FlunetD configuration:
```
<match sigscalr>
  @type elasticsearch
  host localhost
  port 8081
  path /elastic
  <buffer>
    flush_mode interval
    flush_interval 10s
    retry_forever true
  </buffer>
</match>

```

## Vector

Similar to FluentD, SigScalr is compatible with the Elastic plugin for vector. Make sure that the `endpoint` has the `/elasitc` suffix.

An example sink configuration:
```
[sinks.sigscalr]
inputs = [ "parse_logs" ]
type = "elasticsearch"
endpoint = "http://localhost:8081/elastic"
mode = "bulk"
bulk.index = "vector-test"
```

## Kibana

SigScalr implements the nessecary ES APIs for Kibana Discovery. In order to start using SigScalr and Kibana Discovery, simply change the value of `elasticsearch.hosts` in `kibana.yml` to the address of SigScalr with the `/elastic` path.

Example: `elasticsearch.hosts: ["http://0.0.0.0:8081/elastic"]`

!> Kibana Dashboards are not supported
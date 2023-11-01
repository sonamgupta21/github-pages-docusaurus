---
sidebar_position: 5
---

# Data Management

## Retention

SigScalr has 2 types of retention policies:
1. Time based retention
2. Incoming volume based retention

Based on the configured value of `retentionDays`, SigScalr will automatically clean up data older than `retentionDays`. 

Volume based retention is dependent on the license. The default behavior with no license will allow for 100GB of data to be ingested. SigScalr will automatically delete the oldest data to keep at least 100GB of data accessible.

To increase the retention volume, reach out to info@sigscalr.io

## Deleting Data

To remove data for an entire index from SigScalr, use the `DELETE /elastic/{indexName}` endpoint.

!> SigScalr is append-only, so deleting specific documents is not supported
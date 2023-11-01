---
sidebar_position: 3
---

# Query

## Pipe based query language

The SigScalr UI uses a query language designed to be readable and easy to use for filtering log data.

To free text search type in the string. For example: `iOS`, `Android`, `ERROR`. 

To query special characters or multiple words, add quotes. For example: `"Error=3"`, `"(Example)"`, `"Find this phrase"`

To query column values, Use `key op value`. Where the `op` can be `=,>,>=,<,<=,!=`. For example `aws_region=us-east1`, `msg_text!="abc def"`, `latency >= 50.4`

Use wildcards `*` to search for substrings. For example `batch=batch-77*`, `log = "Error-* Failure to"`

Combine queries using nested parentheses with `AND/OR` operators. For example `(iOS OR macOS) AND ( aws_region=us-east1 AND (col1 >= 50.4 OR col3 <= 10))`

!> Note that queries are case sensitive
## Elasticsearch DSL

SigScalr supports a subset of ES DSL to allow for compatability with existing pipelines. All endpoints for querying with Elasticsearch are prefixed with `/elastic/`.
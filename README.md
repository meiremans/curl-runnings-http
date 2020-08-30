"# curl-runnings-http" 
 
 available on docker hub:
 docker pull meiremans/http-curl-runnings
 
 can be added to docker compose like this:
 
 ````  
 testrunner:
       image: meiremans/http-curl-runnings:1.0.0
       ports:
         - 8001:8001
````

this accepts all the curl-runnings test cases input in json like in the [Examples](https://github.com/aviaviavi/curl-runnings/blob/master/examples/example-spec.json)
and outputs them again in JSON.

For example:

````
curl -X POST \
  http://localhost:8001/ \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 63c14be9-4eb9-4e83-a1f9-c48b5f3dcf52' \
  -H 'cache-control: no-cache' \
  -d '[
  {
    "name": "test 1",
    "url": "https://httpbin.org/get",
    "requestMethod": "GET",
    "expectStatus": 200
  },
    {
    "name": "test 2",
    "url": "https://httpbin.org/get",
    "requestMethod": "GET",
    "expectStatus": 202
  }
 ]'
````

Will give as response:

````
[
    {
        "responseHeaders": [
            [
                "Date",
                "Sun, 30 Aug 2020 22:30:50 GMT"
            ],
            [
                "Content-Type",
                "application/json"
            ],
            [
                "Content-Length",
                "313"
            ],
            [
                "Connection",
                "keep-alive"
            ],
            [
                "Server",
                "gunicorn/19.9.0"
            ],
            [
                "Access-Control-Allow-Origin",
                "*"
            ],
            [
                "Access-Control-Allow-Credentials",
                "true"
            ]
        ],
        "testPassed": true,
        "case": {
            "auth": null,
            "queryParameters": null,
            "url": "https://httpbin.org/get",
            "headers": null,
            "name": "test 1",
            "expectData": null,
            "expectStatus": {
                "tag": "ExactCode",
                "contents": 200
            },
            "expectHeaders": null,
            "requestMethod": "GET",
            "requestData": null
        },
        "elapsedTimeSeconds": 1.304,
        "responseValue": {
            "origin": "xx.xx.xx.xx",
            "args": {},
            "url": "https://httpbin.org/get",
            "headers": {
                "Content-Type": "application/json; charset=utf-8",
                "Accept-Encoding": "gzip",
                "Host": "httpbin.org",
                "Content-Length": "2",
                "X-Amzn-Trace-Id": ""
            }
        }
    },
    {
        "responseHeaders": [
            [
                "Date",
                "Sun, 30 Aug 2020 22:30:50 GMT"
            ],
            [
                "Content-Type",
                "application/json"
            ],
            [
                "Content-Length",
                "313"
            ],
            [
                "Connection",
                "keep-alive"
            ],
            [
                "Server",
                "gunicorn/19.9.0"
            ],
            [
                "Access-Control-Allow-Origin",
                "*"
            ],
            [
                "Access-Control-Allow-Credentials",
                "true"
            ]
        ],
        "failures": [
            {
                "tag": "StatusFailure",
                "contents": [
                    {
                        "auth": null,
                        "queryParameters": null,
                        "url": "https://httpbin.org/get",
                        "headers": null,
                        "name": "test 2",
                        "expectData": null,
                        "expectStatus": {
                            "tag": "ExactCode",
                            "contents": 202
                        },
                        "expectHeaders": null,
                        "requestMethod": "GET",
                        "requestData": null
                    },
                    200
                ]
            }
        ],
        "testPassed": false,
        "case": {
            "auth": null,
            "queryParameters": null,
            "url": "https://httpbin.org/get",
            "headers": null,
            "name": "test 2",
            "expectData": null,
            "expectStatus": {
                "tag": "ExactCode",
                "contents": 202
            },
            "expectHeaders": null,
            "requestMethod": "GET",
            "requestData": null
        },
        "elapsedTimeSeconds": 0.100,
        "responseValue": {
            "origin": "xx.xx.xx.xx",
            "args": {},
            "url": "https://httpbin.org/get",
            "headers": {
                "Content-Type": "application/json; charset=utf-8",
                "Accept-Encoding": "gzip",
                "Host": "httpbin.org",
                "Content-Length": "2",
                "X-Amzn-Trace-Id": ""
            }
        }
    }
]
````

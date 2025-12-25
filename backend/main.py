from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
def parse_pipeline(payload: dict = Body(...)):
    nodes = payload.get("nodes", [])
    edges = payload.get("edges", [])

    num_nodes = len(nodes)
    num_edges = len(edges)

    graph = {}
    indegree = {}

    for e in edges:
        s = e.get("source")
        t = e.get("target")
        graph.setdefault(s, []).append(t)
        indegree[t] = indegree.get(t, 0) + 1
        indegree.setdefault(s, 0)

    queue = [n for n in indegree if indegree[n] == 0]
    visited = 0

    while queue:
        curr = queue.pop(0)
        visited += 1
        for nxt in graph.get(curr, []):
            indegree[nxt] -= 1
            if indegree[nxt] == 0:
                queue.append(nxt)

    is_dag = visited == len(indegree)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }

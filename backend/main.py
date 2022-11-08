from typing import Union
from fastapi import FastAPI

import torch
from torch import Tensor

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/device")
def get_device():
    if torch.cuda.is_available():
        return [...(torch.cuda.get_device_name(i) for i in range(torch.cuda.device_count())), "cpu"]
    else:
        return ["cpu"]

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

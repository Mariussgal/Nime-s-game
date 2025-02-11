from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from gamescript import nim_ai  

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

class InitGameRequest(BaseModel):
    total_matches: int

class MoveRequest(BaseModel):
    matches: int
    player_move: int

@app.post("/start")
def start_game(request: InitGameRequest):
    return {"matches": request.total_matches}

@app.post("/play")
def play_game(request: MoveRequest):
    return nim_ai(request.matches, request.player_move)

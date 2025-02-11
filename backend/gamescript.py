import random

def nim_ai(matches, player_move):
   
  
    if player_move not in [1, 2, 3] or player_move > matches:
        return {"error": "Invalid move. Choose between 1 and 3 matches."}


    matches -= player_move
    if matches == 0:
        return {"result": "You lost!", "matches": 0}


    if matches > 1:
        target_matches = 1 + 4 * ((matches - 1) // 4)
        ai_move = matches - target_matches
        ai_move = max(1, min(ai_move, 3))
    else:
        ai_move = 1

    matches -= ai_move
    if matches == 0:
        return {"result": "You won!", "matches": 0}

    return {"ai_move": ai_move, "matches": matches}

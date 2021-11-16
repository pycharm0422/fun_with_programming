import numpy as np

ROW_COUNT = 6
COLOUMN_COUNT = 7

def create_board():
    board = np.zeros((ROW_COUNT,COLOUMN_COUNT))
    return board


def is_valid_location(board, col):
    return board[ROW_COUNT-1][col]

def get_next_row_item(board, col, turn):
    for r in range(ROW_COUNT):
        if(board[r][col] == 0):
            board[r][col] = turn+1
            return board[r][col]

def winning_move(board):
    pass

def print_board(board):
    print(np.flip(board))

game_over = False
brd = create_board()
turn = 0
while not game_over:

    if turn == 0:
        col = int(input("Player 1 Chance ... Enter your choice between (0,6): "))
        if is_valid_location(brd, col) == 0:
            row = get_next_row_item(brd, col, turn)
            print("The row value is ", row)


            print("Valid Position")
        else:
            print("Not Valid Pos")

    if turn == 1:
        col = int(input("Player 2 Chance ... Enter your choice between (0,6): "))
        if is_valid_location(brd, col) == 0:
            row = get_next_row_item(brd, col, turn)
            print("The row value is ", row)
            if(is_winning_move == True):
                winner = 0
                break

            print("Valid Position")
        else:
            print("Not Valid Pos")
    turn += 1
    turn = turn % 2
    print_board(brd)

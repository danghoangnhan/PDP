import pygame

pygame.init()  # 初始化
display_width = 400
display_height = 600
blue = (0, 0, 255)
bright_blue = (173, 216, 230)

gameDisplay = pygame.display.set_mode((display_width, display_height))
pygame.display.set_caption('Jet')  # 視窗名稱
image = pygame.image.load('./asset/jet.png')  # 放入圖片

background = pygame.image.load('./asset/background.jpg')

gameDisplay.blit(background, (0, 0))  # 对齐的坐标
clock = pygame.time.Clock()
bullet_SIZE = 3  # 子彈大小


def Score(count):  # 計分
    font = pygame.font.SysFont(None, 25)
    text = font.render("Score: " + str(count), True, (255, 255, 255))
    gameDisplay.blit(text, (0, 0))



def text_objects(text, font):  # 字的顏色
    textSurface = font.render(text, True, (255, 255, 255))
    return textSurface, textSurface.get_rect()


def button(msg, x, y, w, h, ic, ac, action=None):  # 按鈕設置
    mouse = pygame.mouse.get_pos()  # 獲得滑鼠事件
    click = pygame.mouse.get_pressed()  # 獲得點擊事件
    print(click)
    if x + w > mouse[0] > x and y + h > mouse[1] > y:
        pygame.draw.rect(gameDisplay, ac, (x, y, w, h))

        if click[0] == 1 and action is not None:
            action()
    else:
        pygame.draw.rect(gameDisplay, ic, (x, y, w, h))

    smallText = pygame.font.SysFont("comicsansms", 20)  # 字型
    textSurf, textRect = text_objects(msg, smallText)
    textRect.center = ((x + (w / 2)), (y + (h / 2)))
    gameDisplay.blit(textSurf, textRect)  # 印出文字


def gameintro():
    intro = True
    while intro:
        for event in pygame.event.get():  # 獲得事件
            if event.type == pygame.QUIT:  # ==pygame.quit結束遊戲
                pygame.quit()
                quit()

        gameDisplay.blit(background, (0, 0))  # 背景
        largeText = pygame.font.SysFont("comicsansms", 115)  # 字型以及大小
        TextSurf, TextRect = text_objects("JET", largeText)
        TextRect.center = ((display_width / 2), (display_height / 3))  # 標題位置
        gameDisplay.blit(TextSurf, TextRect)

        button("GO!", 150, 400, 100, 50, blue, bright_blue, gameloop)
        button("Quit", 150, 500, 100, 50, blue, bright_blue, quitgame)

        pygame.display.update()  # 更新視窗
        clock.tick(15)


def quitgame():  # 離開遊戲
    pygame.quit()
    quit()


def army(x, y):
    gameDisplay.blit(image, (x, y))  # 印出友軍


class ball:
    """
    Class to keep track of a ball's location and vector.
    """

    def __init__(self, x, y):  # 初始值
        self.x = x
        self.y = y
        self.change_x = 0
        self.change_y = 0

    def next(self, count):
        self.x += count
        self.y += count


def gameloop():
    x = 155  # 初始x,y位置在畫面正下方
    y = 155
    x_change = 0
    y_change = 0
    count = 0
    gameExit = False  # 宣告gameExit為false
    b = ball(x, y)

    while not gameExit:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()

        gameDisplay.blit(background, (0, 0))  # 印出背景
        pygame.draw.circle(gameDisplay, (255, 255, 255), [b.x, b.y], 15)
        count += 1
        b.next(count)
        clock.tick(60)  # 每秒60帧
        pygame.display.update()  # 更新頁面


gameintro()
gameloop()
# pygame.quit()
# quit()

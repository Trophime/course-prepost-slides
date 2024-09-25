import matplotlib.pyplot as plt
import matplotlib.patches as patches

def demo_con_style(ax, x1, y1, x2, y2, arrowstyle, connectionstyle):

    #ax.plot([x1, x2], [y1, y2], ".")
    ax.annotate("",
                xy=(x1, y1), xycoords='data',
                xytext=(x2, y2), textcoords='data',
                arrowprops=dict(arrowstyle=arrowstyle, color="0.5",
                                shrinkA=5, shrinkB=5,
                                patchA=None, patchB=None,
                                connectionstyle=connectionstyle,
                                lw=3,
                                ),
                )

    # ax.text(.05, .95, connectionstyle.replace(",", ",\n"),
    #         transform=ax.transAxes, ha="left", va="top")

x0 = -0.5
y0 = -0.5
dx = 1
dy = 1

#Square plot with add_patch() and different scales
with plt.xkcd():
    fig, ax = plt.subplots()
    square = patches.Rectangle((x0, y0), dx, dy, edgecolor='purple', facecolor='purple')
    hsquare = patches.Rectangle((-dx/3., -dy/3.), dx/1.5, dy/1.5, edgecolor='purple', facecolor='white')

    ax.add_patch(square)
    ax.add_patch(hsquare)
    x = [x0, x0+dx, x0+dx, x0]
    y = [y0, y0, y0+dy, y0+dy]
    ax.scatter(x, y, s=40)

    demo_con_style(ax, 0.3, 0, 0., 0.3, arrowstyle="->", connectionstyle="angle3,angleA=0,angleB=90")
    demo_con_style(ax, 0., 0.3, -0.3, 0, arrowstyle="->", connectionstyle="angle3,angleA=90,angleB=0")
    demo_con_style(ax, -0.3, 0, 0, -0.3, arrowstyle="->", connectionstyle="angle3,angleA=0,angleB=90")
    demo_con_style(ax, 0, -0.3, 0.3, 0, arrowstyle="->", connectionstyle="angle3,angleA=90,angleB=0")

    demo_con_style(ax, 0.15, -0.6, 0.6, -0.15, arrowstyle="<-", connectionstyle="angle,angleA=-90,angleB=180,rad=0")
    demo_con_style(ax, 0.6, 0.15, 0.15, 0.6, arrowstyle="<-", connectionstyle="angle,angleA=180,angleB=-90,rad=0")
    demo_con_style(ax, -0.15, 0.6, -0.6, 0.15, arrowstyle="<-", connectionstyle="angle,angleA=-90,angleB=180,rad=0")
    demo_con_style(ax, -0.6, -0.15, -0.15, -0.6, arrowstyle="<-", connectionstyle="angle,angleA=180,angleB=-90,rad=0")

    plt.xlim(x0*1.4, (x0+dx)*1.4)
    plt.ylim(y0*1.4, (y0+dy)*1.4)
    plt.gca().set_aspect('equal', adjustable='box') # Ensures equal aspect ratio

    plt.savefig('orientation.png', dpi=300)
    # plt.show()


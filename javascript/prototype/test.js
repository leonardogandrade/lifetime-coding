// EX 1
function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
}

Size.prototype.resize = function (width, height) {
    this.width = width;
    this.height = height;
}

// EX 2
function Position(x = 0, y = 0) {
    this.x = x;
    this.y = y;
}

Position.prototype.move = function (x, y) {
    this.x = x;
    this.y = y
}

// EX 3

class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position()
    }
}

//  EX 4

ProgramWindow.prototype.resize = function (newSize) {
    newSize.width < 0 || newSize.height < 0 ? this.size = new Size(1, 1) : this.size = newSize
}

// const programWindow = new ProgramWindow();
// const newSize = new Size(300, 200);
// programWindow.resize(newSize)
// console.log(programWindow.size)

// EX 5

// ProgramWindow.prototype.move = function (newPosition) {
//     this.position = newPosition;
// }

// ProgramWindow.prototype.move = function (newPosition) {
//     newPosition.x < 0 || newPosition.y < 0 ? this.position = new Position(0, 0) : this.position = newPosition;

//     if (newPosition.x > this.size.width)
//         this.position.x = this.screenSize - newPosition.x

//     if (newPosition.y > this.size.height)
//         this.position.y = this.screenSize - newPosition.x
// }


ProgramWindow.prototype.move = function (newPosition) {
    newPosition.x < 0 || newPosition.y < 0 ? newPosition = new Position(0, 0) : this.position = newPosition;

    if (newPosition.x > this.size.width && newPosition.x > this.screenSize.width)
        newPosition.x = this.screenSize.width - this.size.width

    if (newPosition.y > this.size.height && newPosition.y > this.screenSize.height)
        newPosition.y = this.screenSize.height - this.size.height

    this.position = newPosition
}


// const programWindow = new ProgramWindow();
// const newSize = new Size(100, 100);
// programWindow.resize(newSize);
// const newPosition = new Position(750, 650);

const programWindow = new ProgramWindow();
const newSize = new Size(100, 100);
programWindow.resize(newSize);
const newPosition = new Position(750, 650);
programWindow.move(newPosition);

console.log(programWindow.screenSize)
console.log(programWindow.size)
console.log(programWindow.position)


// EX 6

function changeWindow(programWindow) {
    const newPosition = new Position(100, 150);
    const newSize = new Size(400, 300);
    programWindow.resize(newSize);
    programWindow.move(newPosition);
}

// const programWindow = new ProgramWindow();
// changeWindow(programWindow);
// console.log(programWindow.screenSize);

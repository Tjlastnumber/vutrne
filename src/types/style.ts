import Position from "./position"

export type Style = {
  x: Number
  y: Number
  position: Position
  top: string
  left: string
  right: string
  bottom: string
  background: string
  transform: string
  scale: number
  translate: {
    x: string,
    y: string
  }
}


import { Point } from './Point.js'

export class Segment {
  /**
   * @param {Point} a One end of the line segment
   * @param {Point} b The other end
   */
  constructor (a, b) {
    this.a = a
    this.b = b
  }

  get length () {
    return Point.distance(this.a, this.b)
  }

  get center () {
    return calculateCenter(this.a, this.b)
  }

  get slope () {
    return calculateSlope(this.a, this.b)
  }

  /**
   * @param {Point} point
   *
   * @returns {boolean} If this line segment have this point in any of its ends
   */
  has (point) {
    return (point === this.a || point === this.b)
  }

  /**
   * @param {Segment} segment
   * @param {Point} point
   * @returns {number} Left (1), above (0) or right (-1)
   */
  static pointSide (segment, point) {
    return Math.sign(
      (segment.b.x - segment.a.x) * (point.y - segment.a.y) -
      (segment.b.y - segment.a.y) * (point.x - segment.a.x)
    )
  }

  // TODO: Change syntax after ESlint 8 / Standard update
  static get Side () {
    return Object.freeze({
      LEFT: 1,
      ABOVE: 0,
      RIGHT: -1
    })
  }
}

/**
 * @param {Point} a
 * @param {Point} b
 */
const calculateCenter = (a, b) => {
  return new Point(
    (b.x - a.x) / 2 + a.x,
    (b.y - a.y) / 2 + a.y
  )
}

/**
 * @param {Point} a
 * @param {Point} b
 */
const calculateSlope = (a, b) => {
  return Math.atan2(b.y - a.y, b.x - a.x)
}

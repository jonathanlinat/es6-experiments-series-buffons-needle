/**
 * MIT License
 *
 * Copyright (c) 2018 Jonathan Linat <https://github.com/jonathanlinat>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

export class Vect {
  constructor (axisX = 0, axisY = 0) {
    this.x = axisX
    this.y = axisY
  }
}

export default class Segment {
  constructor (startPositionX = 0, startPositionY = 0, endPositionX = 0, endPositionY = 0) {
    this.position = {
      endPointA: new Vect(startPositionX, startPositionY),
      endPointB: new Vect(endPositionX, endPositionY)
    }
  }

  set startPositionX (value = 0) { this.position.endPointA.x = value | 0 }
  set startPositionY (value = 0) { this.position.endPointA.y = value | 0 }
  set endPositionX (value = 0) { this.position.endPointB.x = value | 0 }
  set endPositionY (value = 0) { this.position.endPointB.y = value | 0 }

  get startPositionX () { return this.position.endPointA.x }
  get startPositionY () { return this.position.endPointA.y }
  get endPositionX () { return this.position.endPointB.x }
  get endPositionY () { return this.position.endPointB.y }
}

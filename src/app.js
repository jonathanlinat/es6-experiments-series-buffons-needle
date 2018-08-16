/*
 * MIT License
 *
 * Copyright (c) 2018 Jonathan Linat <https://www.github.com/jonathanlinat>
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

import Canvas from './modules/utils/canvas'
import LineSegment from './modules/elements/linesegment'

class App {
  constructor () {
    this.canvas = new Canvas('2d', window.innerWidth, window.innerHeight)

    this.verticalLineColor = '#38c'
    this.neutralNeedleColor = '#bbb'
    this.crushedNeedleColor = '#e43'

    this.lineSegmentWidth = 2
    this.needleLength = this.canvas.width / 8
    this.generatedNeedles = 10 ** 3
    this.crushedNeedles = 0

    this.verticalLines = []
    for (let v = 0; v < (this.canvas.width / this.needleLength) + 1; v++) {
      const spaceBetweenEachVerticalLine = this.needleLength * v

      this.verticalLines.push(new LineSegment(spaceBetweenEachVerticalLine, 0, spaceBetweenEachVerticalLine, this.canvas.height, this.lineSegmentWidth, this.verticalLineColor))
    }

    this.needles = []
    for (let n = 0; n < this.generatedNeedles; n++) {
      const θ = 2 * Math.PI * Math.random()
      const startPositionX = Math.random() * this.canvas.width
      const startPositionY = Math.random() * this.canvas.height
      const endPositionX = startPositionX + (this.needleLength * Math.cos(θ))
      const endPositionY = startPositionY + (this.needleLength * Math.sin(θ))

      this.needles.push(new LineSegment(startPositionX, startPositionY, endPositionX, endPositionY, this.lineSegmentWidth, this.neutralNeedleColor))

      this.verticalLines.forEach(verticalLine => {
        if ((this.needles[n].startPositionX <= verticalLine.startPositionX && this.needles[n].endPositionX >= verticalLine.endPositionX) || (this.needles[n].startPositionX >= verticalLine.startPositionX && this.needles[n].endPositionX <= verticalLine.endPositionX)) {
          this.needles[n].color = this.crushedNeedleColor
          this.crushedNeedles++
        }
      })
    }

    this.approximateValueOfPi = 2 / (this.crushedNeedles / this.generatedNeedles)
    console.log(this.approximateValueOfPi)
  }

  initialize () {
    this.canvas.create()
    if (this.canvas) {
      this.verticalLines.forEach(verticalLine => verticalLine.render(this.canvas))
      this.needles.forEach(needle => needle.render(this.canvas))
    }
  }
}

(function () {
  new App().initialize()
})()

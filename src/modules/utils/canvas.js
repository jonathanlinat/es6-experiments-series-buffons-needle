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

export default class Canvas {
  constructor (context = '', width = 0, height = 0) {
    this.canvas = document.createElement('canvas')
    this.canvas.context = this.canvas.getContext(context)
    this.canvas.width = width
    this.canvas.height = height
  }

  get context () { return this.canvas.context }

  get width () { return this.canvas.width }
  get height () { return this.canvas.height }

  get top () { return this.canvas.height - this.canvas.height }
  get left () { return this.canvas.width - this.canvas.width }
  get right () { return this.canvas.width }
  get bottom () { return this.canvas.height }

  get centerX () { return this.canvas.width / 2 }
  get centerY () { return this.canvas.height / 2 }

  create () {
    document.body.appendChild(this.canvas)
  }
}

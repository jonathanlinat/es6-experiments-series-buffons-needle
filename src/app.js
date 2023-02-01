/**
 * MIT License
 *
 * Copyright (c) 2018-2023 Jonathan Linat <https://github.com/jonathanlinat>
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

import Canvas from './modules/utils/canvas';
import LineSegment from './modules/elements/linesegment';

class App {
  constructor() {
    this.canvas = new Canvas('2d', window.innerWidth, window.innerHeight);

    this.lineSegmentWidth = 2;
    this.needleLength = this.canvas.width / 16;
    this.amountOf = {
      generatedNeedles: 10 ** 3.5,
      crushedNeedles: 0,
    };
    this.colors = {
      verticalLine: '#38c',
      neutralNeedle: '#bbb',
      crushedNeedle: '#e43',
    };
    this.theMagicalNumber = {
      fontProperties: '48pt Helvetica',
      textAlign: 'center',
      textBaseline: 'middle',
    };
    this.generated = {
      verticalLines: [],
      needles: [],
    };
  }

  generateVerticalLines(
    canvas = {},
    generatedVerticalLines = [],
    needleLength = 0,
    lineSegmentWidth = 0,
    verticalLineColor = ''
  ) {
    for (let v = 0; v < canvas.width / needleLength + 1; v++) {
      const spaceBetweenEachVerticalLine = needleLength * v;

      generatedVerticalLines.push(
        new LineSegment(
          spaceBetweenEachVerticalLine,
          0,
          spaceBetweenEachVerticalLine,
          canvas.height,
          lineSegmentWidth,
          verticalLineColor
        )
      );
    }
  }

  _checkIfNeedleIsCrushingAVerticalLine(generatedVerticalLines = [], singleNeedle = [], crushedNeedleColor = '') {
    generatedVerticalLines.forEach((verticalLine) => {
      if (
        (singleNeedle.startPositionX <= verticalLine.startPositionX &&
          singleNeedle.endPositionX >= verticalLine.endPositionX) ||
        (singleNeedle.startPositionX >= verticalLine.startPositionX &&
          singleNeedle.endPositionX <= verticalLine.endPositionX)
      ) {
        singleNeedle.color = crushedNeedleColor;
        this.amountOf.crushedNeedles++;
      }
    });
  }

  generateNeedles(
    canvas = {},
    generatedVerticalLines = [],
    generatedNeedles = [],
    amountOfGeneratedNeedles = 0,
    needleLength = 0,
    lineSegmentWidth = 0,
    neutralNeedleColor = '',
    crushedNeedleColor = ''
  ) {
    const π = Math.PI;
    const θ = 2 * π;

    for (let n = 0; n < amountOfGeneratedNeedles; n++) {
      const randθ = θ * Math.random();
      const startPositionX = canvas.width * Math.random();
      const startPositionY = canvas.height * Math.random();
      const endPositionX = startPositionX + needleLength * Math.cos(randθ);
      const endPositionY = startPositionY + needleLength * Math.sin(randθ);

      generatedNeedles.push(
        new LineSegment(
          startPositionX,
          startPositionY,
          endPositionX,
          endPositionY,
          lineSegmentWidth,
          neutralNeedleColor
        )
      );

      this._checkIfNeedleIsCrushingAVerticalLine(generatedVerticalLines, generatedNeedles[n], crushedNeedleColor);
    }
  }

  _calculateProbability(amountOfCrushedNeedles = 0, amountOfGeneratedNeedles = 0) {
    return amountOfCrushedNeedles / amountOfGeneratedNeedles;
  }

  _calculateTheMagicalNumber(amountOfCrushedNeedles = 0, amountOfGeneratedNeedles = 0) {
    return 2 / this._calculateProbability(amountOfCrushedNeedles, amountOfGeneratedNeedles);
  }

  _drawTheMagicalNumber(
    canvas = {},
    amountOfCrushedNeedles = 0,
    amountOfGeneratedNeedles = 0,
    theMagicalNumberFontProperties = '',
    theMagicalNumberTextAlign = '',
    theMagicalNumberTextBaseline = ''
  ) {
    const calculatedTheMagicalNumber = this._calculateTheMagicalNumber(
      amountOfCrushedNeedles,
      amountOfGeneratedNeedles
    ).toFixed(6);

    canvas.context.font = theMagicalNumberFontProperties;
    canvas.context.textAlign = theMagicalNumberTextAlign;
    canvas.context.textBaseline = theMagicalNumberTextBaseline;
    canvas.context.fillText(calculatedTheMagicalNumber, canvas.width / 2, canvas.height / 2);
  }

  render(
    canvas = {},
    generatedVerticalLines = [],
    generatedNeedles = [],
    amountOfCrushedNeedles = 0,
    amountOfGeneratedNeedles = 0,
    theMagicalNumberFontProperties = '',
    theMagicalNumberTextAlign = '',
    theMagicalNumberTextBaseline = ''
  ) {
    generatedVerticalLines.forEach((verticalLine) => verticalLine.render(canvas));
    generatedNeedles.forEach((needle) => needle.render(canvas));

    this._drawTheMagicalNumber(
      canvas,
      amountOfCrushedNeedles,
      amountOfGeneratedNeedles,
      theMagicalNumberFontProperties,
      theMagicalNumberTextAlign,
      theMagicalNumberTextBaseline
    );
  }

  initialize() {
    this.canvas.create();

    if (this.canvas) {
      this.generateVerticalLines(
        this.canvas,
        this.generated.verticalLines,
        this.needleLength,
        this.lineSegmentWidth,
        this.colors.verticalLine
      );
      this.generateNeedles(
        this.canvas,
        this.generated.verticalLines,
        this.generated.needles,
        this.amountOf.generatedNeedles,
        this.needleLength,
        this.lineSegmentWidth,
        this.colors.neutralNeedle,
        this.colors.crushedNeedle
      );
      this.render(
        this.canvas,
        this.generated.verticalLines,
        this.generated.needles,
        this.amountOf.crushedNeedles,
        this.amountOf.generatedNeedles,
        this.theMagicalNumber.fontProperties,
        this.theMagicalNumber.textAlign,
        this.theMagicalNumber.textBaseline
      );
    }
  }
}

new App().initialize();

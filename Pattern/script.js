/**
 * Rounds a number
 * @param n
 * @param places
 * @returns {number}
 */
const round = (n, places) => Math.round(n * 10 ** places) / 10 ** places

/**
 * Random number between min and max
 * @param min
 * @param max
 * @param precision
 * @returns {*}
 */
const rand = (min, max, precision = 0) => {
  return round((Math.random() * (max - min) + min), precision)
}
/**
 * Represents a color
 */
class Color {
  /**
   * Constructor
   * @param h Hue
   * @param s Saturation
   * @param l Lightness
   */
  constructor(h, s, l) {
    this.h = h
    this.s = s
    this.l = l
  }
/**
   * Creates a random color
   * @returns {Color}
   */
  static createRandom() {
    return new Color(
      rand(0, 360),
      rand(25, 75),
      rand(25, 75)
    )
  }
/**
   * Generates the next color
   * @param hueStepSize By how much the Hue value should change
   * @returns {Color}
   */
  getNextColor(hueStepSize) {
    let nextHue = this.h + hueStepSize
// Wrap around if hue is not between 0 and 360
    if (nextHue < 0) {
      nextHue += 360
    } else if (nextHue > 360) {
      nextHue -= 360
    }

    return new Color(
      nextHue,
      rand(25, 75),
      rand(25, 75)
    )
  }

  /**
   * Get a string representation of this color
   * @returns {string}
   */
  toString() {
    return `hsl(${this.h}, ${this.s}%, ${this.l}%)`
  }
}

/**
 * Creates a color palette of a given size.
 * @param numberOfColors Number of colors.
 * @param hueStepSize By how much the hue should change.
 * @returns {*[]}
 */
const getRandomColorPalette = (numberOfColors, hueStepSize) => {
  const colors = []

  let currentColor = Color.createRandom()
  colors.push(currentColor)

  while (numberOfColors > 0) {
    currentColor = currentColor.getNextColor(hueStepSize)
    colors.push(currentColor)
    numberOfColors--
  }

  return colors
}


class Circle {
  /**
   * Represents a circle within a segment
   * @param cx
   * @param cy
   * @param r
   * @param color
   */
  constructor(cx, cy, r, color) {
    this.cx = cx
    this.cy = cy
    this.r = r
    this.color = color
  }

  /**
   * Get a string representation of this circle
   * @returns {string}
   */
  toString() {
    return `<circle
      cx="${this.cx}"
      cy="${this.cy}"
      r="${this.r}"
      fill="${this.color.toString()}"
      stroke="#000"
      stroke-width="2"
    />`
  }
}


class Segment {
  /**
   * Represents a single Segment
   * @param width Width of the segments rectangle
   * @param height Height of the segments rectangle
   * @param numberOfCircles Number of circles it should contain
   * @param colorPalette The color palette used
   */
  constructor(width, height, numberOfCircles, colorPalette) {
    this.width = width
    this.height = height
    this.circles = []

    this.generateCircles(numberOfCircles, colorPalette)
  }

  /**
   * Generates a given number of random circles with
   * different colors from a given palette
   * @param numberOfCircles Number of circles to generate
   * @param colorPalette Palette to chose colors from
   */
  generateCircles(numberOfCircles, colorPalette) {
    while (numberOfCircles > 0) {
      const radius = rand(this.width * 0.05, this.width * 0.25) // 5% to 25% of the segments width.

      this.circles.push(new Circle(
        rand(0, this.width - radius),
        rand(0, this.height),
        radius,
        colorPalette[rand(0, colorPalette.length - 1)]
      ))

      numberOfCircles--
    }
  }

  /**
   * Creates a string representation of this segment
   * @param id DOM id for referencing
   * @returns {string}
   */
  toString(id) {
    // This is used to "scale" the clippath a bit without using transform: scale
    // When finished, there will be some artifacts at the borders, this reduces them.
    const tolerance = 1

    return `
      <svg width="${this.width + tolerance}" height="${this.height + tolerance}" id="${id}">
        <defs>
          <clipPath id="triangle">
            <!-- scaleZ(1) forces GPU rendering -->
            <polygon transform="scaleZ(1)" points="
              -${tolerance / 2},${this.height / 2} 
              ${this.width + (tolerance / 2)},-${tolerance / 2} 
              ${this.width + (tolerance / 2)},${this.height + (tolerance / 2)}"
            />
          </clipPath>
        </defs>
        
        <g style="clip-path: url(#triangle)">
          ${this.circles.map(c => c.toString()).join("\n")}
        </g>
      </svg>
    `
  }
}

class Pattern {
  /**
   * Creates a full pattern
   * @param numberOfSegments
   * @param radius
   */
  constructor(numberOfSegments, radius) {
    this.numberOfSegments = numberOfSegments
    const angle = 360 / numberOfSegments

    // The formula we used earlier.
    // `angle * Math.PI / 180.0` is necessary, because Math.sin
    // uses radians instead of degrees.
    const segmentHeight = 2 * Math.sin((angle * Math.PI / 180.0) / 2) * radius

    const segmentWidth = Math.sqrt(radius ** 2 - (segmentHeight / 2) ** 2)

    const colorPalette = getRandomColorPalette(5, 25)

    this.segment = new Segment(segmentWidth, segmentHeight, rand(5, 12),  colorPalette);

    this.segmentHeight = this.segment.height
    this.width = 2 * Math.sqrt((this.segment.height / 2) ** 2 + radius ** 2)
    this.height = this.width
  }

  /**
   * Creates a string representation of this pattern
   * @returns {string}
   */
  toString() {
    const segments = []
    let numberOfSegmentsLeft = this.numberOfSegments
    while (numberOfSegmentsLeft > 0) {
      // Rotate the segment
      const rotationRadius = (360 / this.numberOfSegments * numberOfSegmentsLeft) % 360

      let transformRotation = `rotate(${rotationRadius})`
      if (numberOfSegmentsLeft % 2 === 0) {
        transformRotation += ' scale(1, -1)'
      }

      segments.push(`
        <use 
          href="#segment"
          transform="${transformRotation} translate(${this.width / 2} ${this.width / 2 - this.segmentHeight / 2})"
          transform-origin="${this.width / 2} ${this.width / 2}"
        ></use>
      `)

      numberOfSegmentsLeft--
    }

    return `
      <div class="container">
        <div class="segment">
          <div>
            Segment:
          </div>
          ${this.segment.toString('segment')}
        </div>
    
        <div>
          <svg width="${this.width}" height="${this.height}">
            ${segments.join("\n")}
          </svg>
        </div>
      </div>
    `
  }
}


const patternContainer = document.querySelector('#pattern')

const createPattern = () => {
  const pattern = new Pattern(12, 200)
  patternContainer.innerHTML = pattern.toString()
}

createPattern()

document.querySelector('#new').addEventListener('click', e => {
  e.preventDefault()
  createPattern()
})

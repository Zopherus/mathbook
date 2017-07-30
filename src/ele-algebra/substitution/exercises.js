const data = [
  {
    '#question': [
      '\\left\\{',
      '\\begin{array}{c}',
      'y + 3 = x & (1) \\\\',
      '2y - x = 5 & (2)',
      '\\end{array}',
      '\\right.'
    ],
    '#answer': [
      '\\begin{align}',
      'y + 3 &= x &&\\text{(1) is isolated for us}\\\\',
      '2y - (y + 3) &= 5 &&\\text{substitute (1) into (2)}\\\\',
      'y - 3 &= 5\\\\',
      'y &= 8 &&\\text{$\\square$}\\\\',
      '\\\\',
      '\\\\',
      'x &= y + 3 &&\\text{sub. in 8 for $y$ in (1)}\\\\',
      'x &= (8) + 3\\\\',
      'x &= 11 &&\\text{$\\square$}\\\\',
      '\\end{align}',
      '$$\\bbox[5px,border:1px solid black]{x = 11 \\quad y = 8}$$'
    ]
  },
  {
    '#question': [
      '\\left\\{',
      '\\begin{array}{c}',
      'y - 3x = 4 & (1) \\\\',
      'y + x = 8 & (2)',
      '\\end{array}',
      '\\right.'
    ],
    '#answer': [
      '\\begin{align}',
      'y - 3x &= 4 &&\\text{(1) isolate for $y$}\\\\',
      'y &= 4 + 3x &&\\text{(3)}\\\\',
      '\\\\',
      'y + x &= 8 &&\\text{sub. in $4 + 3x$ for $y$}\\\\',
      '(4 + 3x) + x &= 8 &&\\text{solve for $x$}\\\\',
      '4 + 4x &= 8\\\\',
      '4x &= 8 - 4\\\\',
      '4x &= 4\\\\',
      'x &= 1 &&\\text{$\\square$}',
      '\\\\',
      '\\\\',
      'y &= 4 + 3x &&\\text{sub. in $1$ for $x$ in (3)}\\\\',
      'y &= 4 + 3(1)\\\\',
      'y &= 7 &&\\text{$\\square$}\\\\',
      '\\end{align}',
      '$$\\bbox[5px,border:1px solid black]{x = 1 \\quad y = 7}$$'
    ]
  },
  {
    '#question': [
      '\\left\\{',
      '\\begin{array}{c}',
      '\\frac{y}{2} - x = 1 & (1) \\\\',
      '\\frac{x}{y} = 1 & (2)',
      '\\end{array}',
      '\\right.'
    ],
    '#answer': [
      '\\begin{align}',
      '\\frac{x}{y} &= 1 &&\\text{isolate for $x$ in (2)}\\\\',
      'x &= y &&\\text{(3)}\\\\',
      '\\\\',
      '\\frac{y}{2} - x &= 1 &&\\text{sub. in $y$ for $x$ in (1)}\\\\',
      '\\frac{y}{2} - (y) &= 1 &&\\text{solve for $y$}\\\\',
      '\\frac{y}{2} - \\frac{2y}{2} &= 1 \\\\',
      '-\\frac{y}{2} &= 1\\\\',
      'y &= -2 &&\\text{$\\square$}',
      '\\\\',
      '\\\\',
      'x &= y &&\\text{sub. in $-2$ for $y$ in (3)}\\\\',
      'x &= (-2)\\\\',
      'x &= -2 &&\\text{$\\square$}\\\\',
      '\\end{align}',
      '$$\\bbox[5px,border:1px solid black]{x = -2 \\quad y = -2}$$'
    ]
  },
  {
    '#question': [
      '\\left\\{',
      '\\begin{array}{c}',
      'y^2 + x^2 = 4 & (1) \\\\',
      'y - x = 2 & (2)',
      '\\end{array}',
      '\\right.'
    ],
    '#answer': [
      '\\begin{align}',
      'y - x^2 &= 2 &&\\text{(2) isolate for $y$}\\\\',
      'y &= 2 + x &&\\text{(3)}\\\\',
      '\\\\',
      'y^2 + x^2 &= 4 &&\\text{sub. in $2+x$ for $y$ in (1)}\\\\',
      '(2 + x)^2 + x^2 &= 4 &&\\text{solve for $x$}\\\\',
      '(4 + 4x + x^2) + x^2 &= 4 \\\\',
      '2x^2 + 4x + \\cancel{4} &= \\cancel{4}\\\\',
      '2x^2 + 4x &= 0 &&\\text{apply quadratic formula}\\\\',
      '\\\\',
      'a = 2, \\space b = 4, \\space c &= 0\\\\',
      'x &=  \\frac{-b \\pm \\sqrt{\\mathstrut b^2 - 4ac}}{2a} &&\\text{sub. in values for $a$, $b$ and $c$}\\\\',
      '\\\\',
      'x &= \\frac{-(4) \\pm \\sqrt{\\mathstrut (4)^2 - \\cancel{4(2)(0)}}}{2(2)}\\\\',
      '\\\\',
      'x &= \\frac{-4 \\pm \\sqrt{\\mathstrut 4^2}}{4} &&\\text{there are 2 unique solutions for $x$}\\\\',
      '\\\\',
      'x &= \\frac{-4 + 4}{4} = 0 &&\\text{$\\square \\quad$ (4)}\\\\',
      '\\\\',
      'x &= \\frac{-4 - 4}{4} = \\frac{-8}{4} = -2 &&\\text{$\\square \\quad$ (5)}\\\\',
      '\\\\',
      '\\\\',
      'y &= 2 + x &&\\text{sub. in (4) everywhere you see $x$}\\\\',
      'y &= 2 + (0) \\\\',
      'y &= 2 &&\\text{$\\square$}\\\\',
      '\\\\',
      'y &= 2 + x &&\\text{sub. in (5) everywhere you see $x$}\\\\',
      'y &= 2 + (-2) \\\\',
      'y &= 0 &&\\text{$\\square$}\\\\',
      '\\end{align}',
      '$$\\bbox[5px,border:1px solid black]{x = 0 \\quad y = 2}$$',
      '$$\\bbox[5px,border:1px solid black]{x = -2 \\quad y = 0}$$'
    ]
  },
  {
    '#question': [
      '\\left\\{',
      '\\begin{array}{c}',
      'x - 2y + 3z = 7 & (1) \\\\',
      '2x + y + z = 4 & (2) \\\\',
      '-3x + 2y - 2z = -10 & (3)',
      '\\end{array}',
      '\\right.'
    ],
    '#answer': [
      '\\begin{align}',
      'x - 2y + 3z &= 7 &&\\text{isolate for $x$ in (1)}\\\\',
      'x &= 7 + 2y - 3z &&\\text{(4)}\\\\',
      '\\\\',
      '2x + y + z &= 4 &&\\text{(2) sub. in $7 + 2y - 3z$ for $x$ in (2)}\\\\',
      '2(7 + 2y - 3z) + y + z &= 4 &&\\text{simplify}\\\\',
      '14 + 4y - 6z + y + z &= 4 \\\\',
      '5y - 5z &= -10 &&\\text{(5)}\\\\',
      '\\\\',
      '-3x + 2y - 2z &= -10 &&\\text{sub. in $7 + 2y - 3z$ for $x$ in (3)}\\\\',
      '-3(7 + 2y - 3z) + 2y - 2z &= -10 &&\\text{simplify}\\\\',
      '-21 - 6y + 9z + 2y - 2z &= -10\\\\',
      '-4y + 7z &= 11 &&\\text{(6)}\\\\',
      '\\end{align}',
      '$$',
      '\\left\\{',
      '\\begin{array}{c}',
      '5y - 5z = -10 & (5) \\\\',
      '-4y + 7z = 11 & (6)',
      '\\end{array}',
      '\\right.',
      '$$',
      '\\begin{align}',
      '5y - 5z &= -10 &&\\text{isolate for $y$ in (5)}\\\\',
      '5y &= -10 + 5z\\\\',
      'y &= \\frac{-10 + 5z}{5}\\\\',
      'y &= -2 + z &&\\text{(7)}\\\\',
      '\\\\',
      '-4y + 7z &= 11 &&\\text{sub. in $-2 + z$ for $y$ in (6)}\\\\',
      '-4(-2 + z) + 7z &= 11 &&\\text{solve for $z$}\\\\',
      '8 - 4z + 7z &= 11\\\\',
      '8 + 3z &= 11\\\\',
      '3z &= 3\\\\',
      'z &= 1 &&\\text{$\\square$}',
      '\\\\',
      '\\\\',
      'y &= -2 + z &&\\text{sub. in $1$ for $z$ in (7)}\\\\',
      'y &= -2 + (1) &&\\text{solve for $y$}\\\\',
      'y &= -1 &&\\text{$\\square$}\\\\',
      '\\\\',
      '\\\\',
      'x &= 7 + 2y - 3z &&\\text{sub. in $-1$ for $y$ and $1$ for $z$ in (4)}\\\\',
      'x &= 7 + 2(-1) - 3(1) &&\\text{solve for $x$}\\\\',
      'x &= 2 &&\\text{$\\square$}\\\\',
      '\\end{align}',
      '$$\\bbox[5px,border:1px solid black]{x = 2 \\quad y = -1 \\quad z = 1}$$'
    ]
  }
]

const formatter = require('../formatter')
module.exports = formatter(data)

import React from 'react'

var createReactClass = require('create-react-class');

var Education = createReactClass({
  render() {
    return(
      <div className='attr'>
        <h1 className='attr-header'>Diversity, Curiosity, Creativity.</h1>
        <p>These are the words I feel best describe my experience in educational 
          institutions around the world.</p>
        <p><span style={{fontWeight: 'bold'}}>Diversity. </span> 
              My life-long exposure to a truly culture-rich
              learning environment has opened my mind and helped me to
              build and create freely, but most importantly to understand
              each person as an individual with a unique set of skills 
              and struggles.</p>
        <p><span style={{fontWeight: 'bold', marginTop: '20px'}}>Curiosity. </span> 
              At only the age of five, one of my favorite
              pastimes was mathematics. I would go up to my dad and
              with a piece of paper and request for him to fill it
              with algebraic equations for me to solve, only to run
              back to him with a new A4 when I was done. My gusto
              towards problem-solving hasn't changed over the years,
              and during class I would often think ahead and bridge
              previous knowledge to make my own proofs, sometimes
              with luck, sometimes without.</p>
        <p><span style={{fontWeight: 'bold'}}>Creativity. </span> 
              Students often take notes, for it helps them to memorize what
              is being taught in class. I, however, learned that the best way
              to memorize something in the long term is not to write it down,
              but to find a way to interpret it such that it clicks with your
              current understanding of the topic. Therefore, while others wrote,
              I thought, embedding new concepts into my head, where they would 
              stay. This is what effectively allowed for me to start companies, 
              play sports, make music and produce code on the side, and come out
              of school as top of the class in my favorite subjects, Math and 
              Physics.</p>
      </div>
    )
  }
})

export default Education
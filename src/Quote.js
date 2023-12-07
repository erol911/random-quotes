import React, { useEffect, useState} from 'react'

const Quote = () => {
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")

    const fetchQuote = async () => {
        try{
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json()
            const randomIndex = Math.floor(Math.random() * data.length)
            const randomQoute = data[randomIndex]

            setQuote(randomQoute.text)
            setAuthor(randomQoute.author || "Unknown")
    } catch (error) {
        console.error("Error fetching data:", error)
    }
}

useEffect(()=> {
    fetchQuote()
}, [])

const getNewQuote = () => {
    fetchQuote()
}

return (
    <div className='quote-container'>
        
        <p className='quote-text'>{quote}</p>
        <p className="quote-author">- {author}</p>
        <button onClick={getNewQuote} className='quote-button'> Random Quote
        </button>

    </div>
)

}

export default Quote
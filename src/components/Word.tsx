interface Props {
    selectedWord: string
}

const Word = ({ selectedWord }: Props) => {

    return (
        <div className="word">
            {selectedWord.split('').map((letter, index) => {
                return (
                    <span className="letter" key={index}>
                        {(index % 3) === 0  ? letter : ''}
                    </span>
                )
            })
            }
        </div>
    )
}

export default Word

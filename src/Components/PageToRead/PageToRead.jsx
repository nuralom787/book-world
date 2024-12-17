import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { getReadBooksFromLS } from '../Utility/Localstorage';

const PageToRead = () => {
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        fetch("../../books.json")
            .then(res => res.json())
            .then(data => {
                const booksData = getReadBooksFromLS();
                const newBookData = [];
                for (const id of booksData) {
                    const readBooks = data.find(book => book.bookId === id);
                    newBookData.push(readBooks);
                }
                setReadBooks(newBookData);
            })
    }, []);


    // Bar Chart.
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y} C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height} Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const w = "100%"

    return (
        <div className='my-12'>
            <BarChart
                className='mx-auto bg-gray-300 rounded-xl'
                width={1000}
                height={700}
                data={readBooks}
                margin={{
                    top: 50,
                    right: 70,
                    left: 50,
                    bottom: 50,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <XAxis dataKey="bookName" />
                <YAxis />
                <Bar dataKey="totalPages" fill='#8884d8' shape={<TriangleBar />} label={{ position: 'top' }}></Bar>
            </BarChart>
        </div>
    );
};

export default PageToRead;
import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { getReadBooksFromLS } from '../Utility/Localstorage';
import { Helmet } from 'react-helmet-async';

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
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y} C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height} Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className='w-full h-[700px] my-12'>
            <Helmet>
                <title>Book World | Page To Read</title>
            </Helmet>
            <ResponsiveContainer>
                <BarChart
                    className='mx-auto bg-gray-200 rounded-xl'
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
                    <Bar dataKey="totalPages" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {readBooks.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PageToRead;
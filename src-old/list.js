import React from 'react';
import ReactDOM from 'react-dom';

//React列表& Keys
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//     <l1>{numbers}</l1>
// );
// ReactDOM.render(
//     <ul>{listItems}</ul>,
//     document.getElementById('example')
// )

//key值
// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map(
//         (number) => <li key={number.toString()}>{number}</li>
//     );
//     return (
//         <ul>{listItems}</ul>
//     );
// }
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('example')
// )


//用keys提取组件
function ListItem(props) {
    return <li id={props.value}>{props.value}</li>
}
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}
const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('list')
)

function Blog(props) {
    const sidebar = (
        <u>
            {props.posts.map((post) =>
                <li key={post.id} class={post.id}>
                    {post.title}
                </li>
            )}
        </u>
    );
    const content = props.posts.map((post) =>
        <div key={post.id} class={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}
const posts = [
    { id: 1, title: 'hello world', content: 'welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];
ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('list2')
)
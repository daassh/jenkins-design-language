import React from 'react';
import {storiesOf} from '@kadira/storybook';
import {Table} from '../components';

storiesOf('Typography', module)
    .add('Everything', everything)
    .add('Headings', headings)
    .add('Body', bodyText)
    .add('Buttons', buttons)
    .add('Table', table)
;

function headings() {
    return (
        <div>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
        </div>
    );
}

function bodyText() {
    return (
        <p>
            The quick brown fox jumps over the lazy dog.
            The planet <i>Neptune</i> is blue and <i><strong>tilted</strong></i>
            on it's side by an <strong>ancient calamity</strong>.
        </p>
    );
}

function buttons() {
    return (
        <div>
            <button>Button</button>
            &nbsp;
            <a className="btn">Link Button</a>
        </div>
    );
}

function table() {
    return (
        <Table headers={['Header', 'Column']}>
            <tr>
                <td>Body</td>
                <td>Cell</td>
            </tr>
        </Table>
    );
}

function everything() {
    return (
        <div>
            {headings()}
            {bodyText()}
            {buttons()}
            {table()}
        </div>
    );
}

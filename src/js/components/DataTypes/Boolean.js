import React from 'react';
import DataTypeLabel from './DataTypeLabel';

//theme
import Theme from './../../themes/getStyle';


export default class extends React.Component {

    render() {
        const type_name = 'bool';
        const {props} = this;

        return <div {...Theme(props.theme, 'boolean')}>
            <DataTypeLabel type_name={type_name} {...props} />
            {props.value ? "True" : "False"}
        </div>;
    }

}
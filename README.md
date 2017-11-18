# element-prop-types
React PropTypes for props-elements

## Install

```
npm install --save element-prop-types
```

## Usage

```js
const ElementPropTypes = require('element-prop-types');

const Modal = ({ header, items }) => (
    <div>
        <div>{header}</div>
        <div>{items}</div>
    </div>
);

Modal.propTypes = {
    header: ElementPropTypes(Header).isRequired,
    items: PropTypes.arrayOf(ElementPropTypes(Item))
};

// render Modal
React.render(
    <Modal
       header={<Header title="This is modal" />}
       items={[
           <Item/>,
           <Item/>,
           <Item/>
       ]}
    />,
    rootElement
);
```

## API

### `ElementPropTypes(Component)`

checks the type of a React element

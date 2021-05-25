import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview-style.scss';


const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>
            {title.toUpperCase()}
        </h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
            {/* {items.map((item, idx) => {
                return idx < 4 && <div key={item.id}>{item.name}</div>;
            })} */}
        </div>
    </div>
)

export default CollectionPreview;




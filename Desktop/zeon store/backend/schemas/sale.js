export default {
    name: 'sale',
    title: 'Sale',
    type: 'document',
    fields: [
        {    
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name: 'price',
            title: 'Price',
            type: 'string'
        },
        {
            name: 'size',
            title: 'Size',
            type: 'string'
        },
        {
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image'
        }
    ]
}
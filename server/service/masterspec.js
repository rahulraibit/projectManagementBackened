let dashboardserviceClass = class BaseService {

    constructor() {
        this.data = []
    };

    createRecord() {
       this.data = [ 
            {'title': 'NET Development Project', 'desc': 'wruyer', status: 'active', liked: '20', imgSrc:"https://picsum.photos/id/237/200/300"},
            {'title': 'Java Devlopment Project', 'desc': 'wruyer', status: 'active', liked: '20', imgSrc:"https://picsum.photos/id/238/200/300"},
            {'title': 'Python Devlopment', 'desc': 'wruyer', status: 'active', liked: '20', imgSrc:"https://picsum.photos/id/239/200/300"},
            {'title': 'HTML Development Project', 'desc': 'wruyer', status: 'active', liked: '20', imgSrc:"https://picsum.photos/id/240/200/300"},
            {'title': 'Angular Development Project', 'desc': 'wruyer', status: 'active', liked: '20', imgSrc:"https://picsum.photos/id/227/200/300"},
            {'title': 'React Development Project', 'desc': 'wruyer', status: 'active', liked: '20', imgSrc:"https://picsum.photos/id/217/200/300"},
            {'title': 'Graphql Development Project', 'desc': 'wruyer', status: 'active', liked: '20', imgSrc:"https://picsum.photos/id/241/200/300"},
        ];
        
    }
    getFilteredData(searchName) {
        console.log(searchName)
        return this.data.filter(function (str) { return str.title.toLowerCase().includes(searchName.toLowerCase()); });
    }

    getData() {
        return this.data
    }
}
let dashboardservice = new dashboardserviceClass()
module.exports = dashboardservice
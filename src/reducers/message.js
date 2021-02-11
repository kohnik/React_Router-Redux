export default (state = {
    active: false,
    text : null
} , action) => {

    switch (action.type) {
        case  "SHOW" : {
            return Object.assign({},{
                active: true,
                text : action.text,
            })
        }

        case  "HIDE" : {
            return Object.assign({},{
                active: false,
                text : null,
            })
        }

        default : {
            return  state
        }
    }
}
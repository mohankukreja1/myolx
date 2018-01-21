const sequelize=require('sequelize')
const datatypes=sequelize.DataTypes

const db=new sequelize('olx','olxuser','olxpass',{
    host:'localhost',
    dialect:'mysql'
})


const property=db.define('property',{
    id:{
        type:datatypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    maininfo:{
        type:datatypes.STRING
    },
    addinfo:{
        type:datatypes.STRING
    },
    phone:{
        type:datatypes.STRING
    },
    price:{
        type:datatypes.INTEGER
    },
    image:{
        type:datatypes.STRING

    }

})
 const car=db.define('car',{
     id:{
         type:datatypes.INTEGER,
         primaryKey:true,
         autoIncrement:true
     },
    maininfo:{
        type:datatypes.STRING
    },
    addinfo:{
        type:datatypes.STRING
    },
    phone:{
        type:datatypes.STRING
    },
    price:{
        type:datatypes.INTEGER
    },
    image:{
        type:datatypes.STRING
    }
})
const electronics=db.define('electronics',{
    id:{
        type:datatypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    maininfo:{
        type:datatypes.STRING
    },
    addinfo:{
        type:datatypes.STRING
    },
    phone:{
        type:datatypes.STRING
    },
    price:{
        type:datatypes.INTEGER
    },
    image:{
        type:datatypes.STRING
    }
})


const jobs=db.define('jobs',{
    id:{
        type:datatypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    maininfo:{
        type:datatypes.STRING
    },
    addinfo:{
        type:datatypes.STRING
    },
    phone:{
        type:datatypes.STRING
    },
    salary:{
        type:datatypes.INTEGER

    },
    image:{
        type:datatypes.STRING
    }
})

const mobiles=db.define('mobile',{
    id:{
        type:datatypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    maininfo:{
        type:datatypes.STRING
    },
    addinfo:{
        type:datatypes.STRING
    },
    phone:{
        type:datatypes.STRING
    },
    price:{
        type:datatypes.STRING

    },
    image:{
        type:datatypes.STRING
    }
})
const bike=db.define('bike',{
    id:{
        type:datatypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    maininfo:{
        type:datatypes.STRING
    },
    addinfo:{
        type:datatypes.STRING
    },
    phone:{
        type:datatypes.STRING
    },
    price:{
        type:datatypes.STRING

    },
    image:{
        type:datatypes.STRING
    }
})

const book=db.define('book',{
    id:{
        type:datatypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    maininfo:{
        type:datatypes.STRING
    },
    addinfo:{
        type:datatypes.STRING
    },
    phone:{
        type:datatypes.STRING
    },
    price:{
        type:datatypes.STRING

    },
    image:{
        type:datatypes.STRING
    }
})

const fashion=db.define('fashion',{
    id:{
        type:datatypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    maininfo:{
        type:datatypes.STRING
    },
    addinfo:{
        type:datatypes.STRING
    },
    phone:{
        type:datatypes.STRING
    },
    price:{
        type:datatypes.STRING

    },
    image:{
        type:datatypes.STRING
    }
})

const pets=db.define('pets',{
    id:{
        type:datatypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    maininfo:{
        type:datatypes.STRING
    },
    addinfo:{
        type:datatypes.STRING
    },
    phone:{
        type:datatypes.STRING
    },
    price:{
        type:datatypes.STRING

    },
    image:{
        type:datatypes.STRING
    }
})
const services=db.define('services',{
    id:{
        type:datatypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    maininfo:{
        type:datatypes.STRING
    },
    addinfo:{
        type:datatypes.STRING
    },
    phone:{
        type:datatypes.STRING
    },
    price:{
        type:datatypes.STRING

    },
    image:{
        type:datatypes.STRING
    }
})

const cart=db.define('cart',{
    id:{
        type:datatypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    maininfo:{
        type:datatypes.STRING
    },
    addinfo:{
        type:datatypes.STRING
    },
    phone:{
        type:datatypes.STRING
    },
    price:{
        type:datatypes.STRING

    },
    image:{
        type:datatypes.STRING
    },
    type:{
        type:datatypes.STRING
    },
    salary:{
        type:datatypes.STRING
    }
})

db.sync({force:true});

exports=module.exports={
    property,car,electronics,jobs,mobiles,bike,book,fashion,pets,services,cart
}



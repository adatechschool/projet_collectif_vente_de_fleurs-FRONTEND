import React, {useState} from "react";

const ArticleText = (props) => {

    const [count, setCount] = useState(1);
        // ajoute article jusqu'à max articl exisstant en stock
    function handleClick() {
            if(count < props.stock){
                setCount(count + 1);
            }
        
    }

    //   supprime articl
    function handleClickDecount() {
        if(count <= 1){
            setCount(count = 1)
        }else{

            setCount(count - 1);
        }
    }
    console.log(props.name)
    return(
        <div className="w-[40%]">
            <div id="productName" className="text-2xl p-5 font-bold">
                <h1>{props.name}</h1>           
            </div>
            <div id="article-text-content" className="p-5">
                <p>
                    {props.description}
                </p>
                <div id="price" className="mt-5 text-green-700 text-xl font-bold">
                     {props.price}€
                </div>
            </div>
            
            <div id="order-button-container" className="flex">
            {/* Input quantité à revoir/coder */}
                <div className="w-[50%] flex">
                    <div className="w-[70px] ml-[20px] flex items-center border-2 justify-center">
                        <p className="w-[10%] text-[20px]">{count}</p>
                    </div>
                    <div className="flex flex-col w-[100px]">
                        <button className="w-10%" onClick={handleClick} >clicke+</button>
                        <button className="w-10%" onClick={handleClickDecount} >clicke -</button>

                    </div>
                </div>
                
                <div className="w-[30%]">
                    <button type="submit" name="add-to-cart" className="ml-[20px] w-[150px] h-[40px] rounded-[4px] bg-green-700 px-2 py-1 text-white border hover:shadow-xl">J'achète</button>
                </div>
            </div>
        </div>
    )
}

export default ArticleText;
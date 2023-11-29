import styles from "./Home.module.css";

import { columns,data } from '../../data.js';
import { Navbar,Table } from "../../exports.js";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const OrderBill = () => {
    const componentRef = useRef();
const handlePrint = useReactToPrint({
  content: () => componentRef.current,
});

    return (
      
        <div className={styles.orderBill}>
            <Navbar title="Generate A Bill Invoice"/>
           
          <div className={styles.container} ref = { componentRef }>
          <div className={styles.header}>
              <div className={styles.left}>
                      <h3 className={styles.title}>Hospital Name</h3>
                      <div className={styles.invId}>
                  <h4>Nairobi</h4>
                  <h4>+254000000</h4>
                      </div>
                  

              </div>
              <div className={styles.right}>
                      <h4>Invoice Number</h4>
                      <h3>{`${35463}`}</h3>
              </div>
          </div>
          <div className={styles.info}>
                  <div className={styles.from}>
                      <span>Hospital Details:</span>
                      <div>
                    <h3>Hospital Name</h3>
                  <h3>Nairobi,Kenya</h3>
                  <h3>+254000000</h3>
                      </div>
                  
              </div>
                  <div className={styles.to}>
                      <span>Patient Details:</span>
                      <div>
                          <h3>patient names</h3>
                  <h3>Nairobi,Kenya</h3>
                  <h3>+254000000</h3>
                      </div>
                  
              </div>
          </div>
          <div className={styles.items}>
              <Table columns={columns} data={data} />

          </div>
            
       <p className={styles.p}>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis officiis quo
    dignissimos fugiat repudiandae libero accusantium reiciendis quae quos
    eligendi ab esse fuga praesentium officia tenetur, voluptate ipsam maxime
    explicabo illo ratione perferendis, odio consequuntur debitis. Qui cumque
    ut, corporis adipisci nostrum quam ea, ratione eos iste assumenda ducimus in
    dicta dolorem? Impedit corrupti placeat aut repellendus tempore doloribus
    debitis eum magni. Dolorum deleniti excepturi quo optio.
  

                </p>
            </div>
            
            <button onClick={handlePrint} className={styles.btnPrint}>Print</button>;

           </div>
  )
}

export default OrderBill
<<<<<<< HEAD

import OrdersHistory from '@/components/dashbord/orders/orders-history';
import React from 'react'

export const Orders= () => {
  return (
    <div className='w-full flex items-center justify-center px-24 bg-background min-h-screen '>
     <OrdersHistory />
  
    </div>
  )
}

export default Orders;
=======
import React from 'react';
import OrdersHistory from '@/components/dashbord/orders/orders-history';

export const Orders = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background px-24 ">
      <OrdersHistory />
    </div>
  );
};

export default Orders;
>>>>>>> 2e204526af3930f4a2c1eb8432192121dad78a50

 "use client";
import { Provider } from 'react-redux'
import { store } from './store'
import { Toaster } from 'react-hot-toast';
 


const ProvaiderComponent = ({ children }) => {

  return (
     <Provider store={store}>
        {children}
        <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 3000,
              style: {
                background: "#ffff",
                color: "#000000",
                fontWeight: "300",
                borderRadius: "8px",
                marginTop: "20px",
              },
            }}
          />
       </Provider>
  )
}

export default ProvaiderComponent
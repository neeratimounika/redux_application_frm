import React from 'react'
import { useSelector } from 'react-redux'

const Account = () => {
   let data =  useSelector(
        (state)=>{
            return state;
    }
    )
  return (
    <div>
      <div className='container'>
        <h2 className='text-primary'>Account Deails</h2>
        <table className='table table-bordered w-50'>
            <thead>
                <tr>
                    <th>Balance</th>
                    <th>User Name</th>
                    <th>Mobile No</th>
                </tr>
            </thead>

            <tbody>
            <tr>
                    <td>{data.balance}</td>
                    <td>{data.fullName}</td>
                    <td>{data.mobile}</td>
                </tr>
            </tbody>
        </table>

      </div>
    </div>
  )
}

export default Account

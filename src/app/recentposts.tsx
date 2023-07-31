import React from 'react'

const RecentPosts = () => {
  return (
    <div className="flex flex-col gap-2 ">
            <img className="rounded-xl" src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
            <h3 className="font-medium">Titulo</h3>
            <p className="font-light text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, expedita! Illo eos blanditiis reprehenderit non vero magnam impedit ab ullam esse voluptatum dolor enim, temporibus et, amet id quaerat. </p>
            <div className="flex gap-2">
              <img className="rounded-full w-4 h-4" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
              <p  className="font-medium text-xs">Autor do Post</p>
              <p className="font-extrabold text-xs">·</p>
              <p  className="font-medium text-xs">28/07/2023</p>
            </div>
          </div>
  )
}

export default RecentPosts
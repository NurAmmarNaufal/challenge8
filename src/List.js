import React from "react";

export default function List({ data, handleEdit, handleDelete }) {
    return (
        <div className="list-group">
            {
                data.map((player) => {
                    return (
                        <div className="list-group-item list-group-item-action">
                            <div className="d-flex justify-content-between">
                                <h5 className="mb-1">{player.username}</h5>
                                <p className="mb-1">{player.email}</p>
                                <p className="mb-1">{player.experience}</p>
                                <p className="mb-1">{player.level}</p>
                                <div>
                                    <button onClick={() => handleEdit(player.id)} className="btn btn-sm btn-link">Edit</button>
                                    <button onClick={() => handleDelete(player.id)} className="btn btn-sm btn-link">Del</button>
                                </div>
                            </div>
                        </div>
                    );
                })
            }

        </div>
    );
}
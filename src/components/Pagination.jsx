import React from 'react';

export default function Pagination({ totalItems, itemsPerPage, currentPage, setCurrentPage }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center items-center gap-2 mt-16 scroll-reveal active">
            <button 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-full border border-leather-300 flex items-center justify-center hover:bg-leather-800 hover:text-cream transition-all disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-leather-900"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            
            {pages.map(page => (
                <button 
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full font-medium transition-all ${currentPage === page ? 'bg-leather-800 text-cream' : 'border border-leather-300 text-leather-800 hover:bg-leather-100'}`}
                >
                    {page}
                </button>
            ))}

            <button 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-full border border-leather-300 flex items-center justify-center hover:bg-leather-800 hover:text-cream transition-all disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-leather-900"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </button>
        </div>
    );
}

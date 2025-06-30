'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';

const BlogWrapper = () => {
    const { darkMode } = useTheme();
    return (
        <div className={`flex flex-col h-[90vh] w-full max-w-lg ${darkMode ? 'bg-[#1a1a2e] text-white' : 'bg-white text-black'} border border-white/10 rounded-2xl shadow-xl overflow-hidden`}>
            
        </div>
    )
}

export default BlogWrapper
import { GitHubCalendar } from 'react-github-calendar'
import { motion } from 'motion/react'
import { useTheme } from '../common/Theme'
import { useMemo } from 'react'


const GitHubActivityBar = () => {
    const username = 'HarshNawle' // Your GitHub username
    const { theme } = useTheme()
    
    // Determine color scheme based on theme
    const colorScheme = useMemo(() => {
        if (theme === 'system') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        }
        return theme
    }, [theme])

    return (
        <motion.div 
            className="container mx-auto max-w-4xl px-12 max-auto py-10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
                <p className="text-gray-400 text-sm">Activity</p>
                <h2 className="text-2xl font-bold">GitHub Contributions</h2>
            </motion.div>

            <motion.div 
                className="mt-8 w-full github-calendar-wrapper"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            >
                <style>{`
                    .github-calendar-wrapper {
                        overflow-x: auto;
                        overflow-y: hidden;
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                    }
                    .github-calendar-wrapper::-webkit-scrollbar {
                        display: none;
                        width: 0;
                        height: 0;
                    }
                    .github-calendar-wrapper * {
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                    }
                    .github-calendar-wrapper *::-webkit-scrollbar {
                        display: none;
                        width: 0;
                        height: 0;
                    }
                `}</style>
                <div className="flex justify-center w-full">
                    <GitHubCalendar
                        username={username}
                        blockSize={10}
                        blockMargin={3}
                        fontSize={12}
                        theme={{
                            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                            dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
                        }}
                        colorScheme={colorScheme}
                        style={{
                            color: 'inherit',
                        }}
                    />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default GitHubActivityBar
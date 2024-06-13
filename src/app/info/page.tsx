'use client';

import * as React from 'react';
import {
    Tabs,
    Tab,
    Box,
    Typography,
    List,
    ListItem,
} from '@mui/material';

import styles from './info.module.css';

import { Jobs } from '@/helpers/JobList';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default function Info() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <main className="section">
            <div className="container">
                <Typography variant='h2' className="title-1"> Инфа обо мне </Typography>
                <Typography className={styles.p}>
                    Здесь должна быть какая-то полезная информация обо мне, но я пока что не придумал, что написать, по этому немного про проделанный путь :)
                </Typography>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                        >
                            {Jobs && Jobs.map((job, index) => <Tab className='tab' label={job.title} key={index} />)}
                        </Tabs>
                    </Box>
                    {Jobs && Jobs.map((job, index) =>
                        <TabPanel value={value} index={index} key={index} >
                            <Typography variant='h5' className={styles.h5}> {job.position} </Typography>
                            <Typography variant='h6' mb={2} className={styles.h6}> {job.period} </Typography>
                            <List>
                            {
                                job.info && job.info.map((info, index) => <ListItem  className={index % 2 === 0 ? `${styles.p} ${styles.p__even}` : `${styles.p} ${styles.p__odd}`} key={index} > {info} </ListItem >)
                            }
                            </List>
                            {
                                job.NDA && <Typography className={styles.p} key={index}> <i>{job.NDA}</i> </Typography>
                            }
                        </TabPanel>)
                    }
                </Box>
            </div>
        </main>
    );
}
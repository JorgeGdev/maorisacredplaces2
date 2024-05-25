// src/components/RegionSelector.tsx
import React, { type FC } from 'react';
import styles from './RegionSelector.module.css';

type RegionSelectorProps = {
    regions: string[];
    selectedRegion: string;
    onSelectRegion: (region: string) => void;
};

export const RegionSelector: FC<RegionSelectorProps> = ({ regions, selectedRegion, onSelectRegion }) => {
    return (
        <div className={styles.selectorContainer}>
            <label htmlFor="region-select" className={styles.label}>Select a region:</label>
            <select id="region-select" value={selectedRegion} onChange={(e) => onSelectRegion(e.target.value)} className={styles.select}>
                <option value="">All Regions</option>
                {regions.map((region) => (
                    <option key={region} value={region}>
                        {region}
                    </option>
                ))}
            </select>
        </div>
    );
};

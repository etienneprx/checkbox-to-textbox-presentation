# From Checkbox to Textbox

[![R](https://img.shields.io/badge/R-%E2%89%A54.0-blue)](https://www.r-project.org/)

### Research Objectives

This repository contains the code and analysis pipeline for a survey methodology study investigating three key questions:

1. **Validity of LLM-based coding**: Can Large Language Models (LLMs) reliably clean open-ended survey responses? Do they converge with traditional closed-ended responses?
   - Methods: Factor analysis, propensity score matching, regression analysis

2. **Respondent behavior and data quality**: How do respondents engage with open-ended questions? What proportion provides low-quality responses?
   - Analysis of response patterns and quality indicators

3. **Added nuance from open-ended questions**: Can open-ended questions capture additional information not available in closed-ended formats?
   - Comparative analysis exploring the informational richness of response formats

### Key Features

- **Automated LLM-based cleaning pipeline** using Google Gemini API
- **Consensus mechanism** with multiple prompts per response for improved reliability
- **Comprehensive metadata tracking** for scientific reproducibility (costs, timing, quality metrics)
- **Parallel processing** for efficiency with large-scale survey data
- **Experimental controls** for temperature and prompt variations
- **Complete analytical pipeline** including factor analysis, matching, and visualization

### Repository Structure

```
from_checkbox_to_textbox/
├── R/                          # Analysis scripts (39 R files)
│   ├── ai_*.R                  # LLM processing pipeline
│   ├── cleaning_*.R            # Data cleaning scripts
│   ├── fig_*.R                 # Analysis and visualization
│   └── sup_*.R                 # Supplementary analyses
├── data/                       # Processed datasets
│   └── tmp/                    # JSON outputs from AI processing
├── docs/                       # Configuration files
│   ├── prompt_config.csv       # Configuration for 21 variables
│   └── prompts/                # Prompt templates
├── img/                        # Images
├── results/                    # Analysis outputs (gitignored)
├── run_all_open_cleaning_prompts.sh  # Main pipeline orchestration
└── README.md                   # This file
```

### Quick Start

#### Prerequisites

- R ≥ 4.0
- zsh/bash (Linux/macOS) or Git Bash (Windows)
- Google Gemini API key

#### R Package Dependencies

```r
# Core packages
install.packages(c('haven', 'dplyr', 'tidyr', 'jsonlite', 'httr', 'tools',
                   'stringr', 'glue'))

# Parallel processing
install.packages(c('future', 'future.apply'))

# Analysis packages
install.packages(c('psych', 'GPArotation', 'MatchIt', 'broom'))

# Visualization
install.packages(c('ggplot2', 'ggridges', 'patchwork', 'scales', 'ggrepel'))
```

#### API Configuration

Set your Google Gemini API key:
```bash
echo 'T2C_API_KEY=YOUR_GOOGLE_API_KEY' >> ~/.Renviron
```
Then restart your R session.

#### Running the Pipeline

```bash
# Make script executable
chmod +x run_all_open_cleaning_prompts.sh

# Run with default parameters (temperature=0.1, 10 prompts)
./run_all_open_cleaning_prompts.sh

# Run with custom parameters
./run_all_open_cleaning_prompts.sh [temperature] [num_prompts]

# Example: deterministic baseline
./run_all_open_cleaning_prompts.sh 0.0 1

# Example: strong consensus
./run_all_open_cleaning_prompts.sh 0.1 10
```

### Data Availability

**Note on Raw Data**: The raw SPSS data files (`.sav`) have been removed from this repository in compliance with research ethics committee requirements. The data cleaning pipeline references these files but they are not included. All processed and anonymized data used in the publication are available upon request to the authors.

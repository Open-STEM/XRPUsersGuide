# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

version: 2

project = 'XRP'
copyright = '2023, WPI'
author = 'WPI'
release = '2023.0'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    "sphinx_design",
    "sphinxcontrib.youtube",
    "sphinxcontrib.video"
]

templates_path = ['_templates', 'venv']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store', 'venv', '.vscode']

# -- Options for translation support -------------------------------------------

gettext_compact = False
locale_dirs = ["locales/"]
localization_languages = [
    "en",
    "es",
]

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = "sphinx_rtd_theme"
html_static_path = ['_static']
master_doc = 'index'

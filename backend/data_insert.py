import pandas as pd
from sqlalchemy import create_engine
import db_creds
# 1. Load your Excel file
df = pd.read_excel(r'c:\Users\HP\Downloads\amazon earpod data (1).xlsx')

username = db_creds.db_data['username']
password = db_creds.db_data['password']
stance = db_creds.db_data['database']
main_root = db_creds.db_data['host']
TABLE_NAME = db_creds.db_data['table_name']

# 2. Connect to your SQL Server
engine = create_engine(f'mysql+pymysql://{username}:{password}@{main_root}/{stance}')

# 3. Push to SQL (if_exists='replace' creates the table for you)
df.to_sql('clients', con=engine, if_exists='replace', index=True, index_label='id')

print("HHK Database is now live with your Excel data!")
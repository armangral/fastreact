"""create content column

Revision ID: 380191a8fa58
Revises: 837c6bc950e5
Create Date: 2023-02-12 16:53:43.801460

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '380191a8fa58'
down_revision = '837c6bc950e5'
branch_labels = None
depends_on = None


def upgrade():
    op.add_column('posts', sa.Column('content', sa.String(), nullable=False))
    pass


def downgrade():
    op.drop_column('posts', 'content')
    pass
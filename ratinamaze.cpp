#include <bits/stdc++.h>
using namespace std;
#define N 4
int ans[N][N];
bool isSafe(int maze[N][N],int x,int y)
{
    return x>=0 && x<N && y>=0 && y<N && maze[x][y]==1;
}
bool solveMazeUtil(int maze[N][N],int ans[N][N],int x,int y)
{
    if(x==N-1 && y==N-1 && maze[x][y]==1)
    {
        ans[x][y]=1;
        return 1;
    }
    if(isSafe(maze,x,y))
    {
        if(ans[x][y]==1)
            return false;
        ans[x][y]=1;
        if(solveMazeUtil(maze,ans,x+1,y))
            return true;
        if(solveMazeUtil(maze,ans,x,y+1))
            return true;
        if(solveMazeUtil(maze,ans,x-1,y))
            return true;
        if(solveMazeUtil(maze,ans,x,y-1))
            return true;
        ans[x][y]=0;
        return false;
    }
    return false;
}
bool solveMaze(int maze[N][N])
{
    memset(ans,0,sizeof(ans));
    if(!solveMazeUtil(maze,ans,0,0))
        return 0;
    else
        return 1;
}
int main() {
    int maze[N][N] = { { 1, 0, 0, 0 }, 
                    { 1, 1, 0, 1 }, 
                    { 0, 1, 0, 0 }, 
                    { 1, 1, 1, 1 } }; 
    bool at_end=solveMaze(maze); 
    if(at_end)
    {
        for(int i=0;i<N;i++){
            for(int j=0;j<N;j++)
            {
                cout<<ans[i][j]<<" ";
            }
            cout<<"\n";
        }
    }
    else
        cout<<"No solution\n";
	return 0;
}
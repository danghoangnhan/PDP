def Postponement(P_hat, D, p_max, t_Pmax):
    # P_hat,D, p_max, t_Pmax have the description
    
    # if Theta_hat != D:  # I don't know how to get current route plan
    if len(P_hat) == 0:  # if postponement set is empty
        return True
    elif len(P_hat) < p_max:  # if number of postponement <= max of postponement   
        if D.t - P_hat[0].t <= t_Pmax:  # The time difference with the first order of P_hat and check whether <= max
            # of poatponement time
            return True
        else:
            return False
    else:
        return False
